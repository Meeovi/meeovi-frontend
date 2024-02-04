import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationCreateInput } from "../../../inputs/Product_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationCreateInput, {
    nullable: false
  })
  data!: Product_translationCreateInput;
}
