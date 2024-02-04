import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_feature_set_translationInput";

@TypeGraphQL.InputType("Product_feature_set_translationCreateWithoutProduct_feature_setInput", {})
export class Product_feature_set_translationCreateWithoutProduct_feature_setInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_feature_set_translationInput;
}
