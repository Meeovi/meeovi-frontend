import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_set_translationCreateManyInput } from "../../../inputs/Product_feature_set_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_feature_set_translationArgs {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateManyInput], {
    nullable: false
  })
  data!: Product_feature_set_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
