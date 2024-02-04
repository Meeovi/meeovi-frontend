import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturer_translationCreateInput } from "../../../inputs/Product_manufacturer_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_manufacturer_translationArgs {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateInput, {
    nullable: false
  })
  data!: Product_manufacturer_translationCreateInput;
}
