import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setCreateManyInput } from "../../../inputs/Product_feature_setCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_feature_setArgs {
  @TypeGraphQL.Field(_type => [Product_feature_setCreateManyInput], {
    nullable: false
  })
  data!: Product_feature_setCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
