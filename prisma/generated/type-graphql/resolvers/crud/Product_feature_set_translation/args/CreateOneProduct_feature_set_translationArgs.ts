import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_set_translationCreateInput } from "../../../inputs/Product_feature_set_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_feature_set_translationArgs {
  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateInput, {
    nullable: false
  })
  data!: Product_feature_set_translationCreateInput;
}
