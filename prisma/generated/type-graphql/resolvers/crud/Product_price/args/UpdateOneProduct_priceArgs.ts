import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceUpdateInput } from "../../../inputs/Product_priceUpdateInput";
import { Product_priceWhereUniqueInput } from "../../../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_priceArgs {
  @TypeGraphQL.Field(_type => Product_priceUpdateInput, {
    nullable: false
  })
  data!: Product_priceUpdateInput;

  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Product_priceWhereUniqueInput;
}
