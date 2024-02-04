import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_assigned_productsCreateInput } from "../../../inputs/Product_cross_selling_assigned_productsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_cross_selling_assigned_productsArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsCreateInput, {
    nullable: false
  })
  data!: Product_cross_selling_assigned_productsCreateInput;
}
