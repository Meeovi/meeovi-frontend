import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_assigned_productsWhereUniqueInput } from "../../../inputs/Product_cross_selling_assigned_productsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_cross_selling_assigned_productsArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_selling_assigned_productsWhereUniqueInput;
}
