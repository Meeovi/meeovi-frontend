import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceCreateInput } from "../../../inputs/Product_priceCreateInput";
import { Product_priceUpdateInput } from "../../../inputs/Product_priceUpdateInput";
import { Product_priceWhereUniqueInput } from "../../../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_priceArgs {
  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Product_priceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_priceCreateInput, {
    nullable: false
  })
  create!: Product_priceCreateInput;

  @TypeGraphQL.Field(_type => Product_priceUpdateInput, {
    nullable: false
  })
  update!: Product_priceUpdateInput;
}
