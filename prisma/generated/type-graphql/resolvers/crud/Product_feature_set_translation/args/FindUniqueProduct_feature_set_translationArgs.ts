import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_set_translationWhereUniqueInput } from "../../../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_feature_set_translationArgs {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_set_translationWhereUniqueInput;
}
