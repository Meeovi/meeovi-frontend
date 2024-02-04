import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingCreateInput } from "../../../inputs/Product_cross_sellingCreateInput";
import { Product_cross_sellingUpdateInput } from "../../../inputs/Product_cross_sellingUpdateInput";
import { Product_cross_sellingWhereUniqueInput } from "../../../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_cross_sellingArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_sellingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateInput, {
    nullable: false
  })
  create!: Product_cross_sellingCreateInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateInput, {
    nullable: false
  })
  update!: Product_cross_sellingUpdateInput;
}
