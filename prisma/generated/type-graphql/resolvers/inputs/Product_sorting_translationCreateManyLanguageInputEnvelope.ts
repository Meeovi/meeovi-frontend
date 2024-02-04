import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationCreateManyLanguageInput } from "../inputs/Product_sorting_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_sorting_translationCreateManyLanguageInputEnvelope", {})
export class Product_sorting_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_sorting_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
