import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationCreateManyLanguageInput } from "../inputs/Product_cross_selling_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_cross_selling_translationCreateManyLanguageInputEnvelope", {})
export class Product_cross_selling_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_cross_selling_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_cross_selling_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
