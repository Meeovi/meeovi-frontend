import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCreateManyLanguageInput } from "../inputs/Product_feature_set_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_feature_set_translationCreateManyLanguageInputEnvelope", {})
export class Product_feature_set_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_feature_set_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
