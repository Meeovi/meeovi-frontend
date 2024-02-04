import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sorting_translationCreateInput } from "../../../inputs/Product_sorting_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_sorting_translationArgs {
  @TypeGraphQL.Field(_type => Product_sorting_translationCreateInput, {
    nullable: false
  })
  data!: Product_sorting_translationCreateInput;
}
