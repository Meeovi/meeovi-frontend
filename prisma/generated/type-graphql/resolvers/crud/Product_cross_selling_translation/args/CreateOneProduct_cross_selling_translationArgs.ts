import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_translationCreateInput } from "../../../inputs/Product_cross_selling_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_cross_selling_translationArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationCreateInput, {
    nullable: false
  })
  data!: Product_cross_selling_translationCreateInput;
}
