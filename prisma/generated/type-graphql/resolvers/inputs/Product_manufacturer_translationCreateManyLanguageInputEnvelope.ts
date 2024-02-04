import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateManyLanguageInput } from "../inputs/Product_manufacturer_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_manufacturer_translationCreateManyLanguageInputEnvelope", {})
export class Product_manufacturer_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_manufacturer_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
