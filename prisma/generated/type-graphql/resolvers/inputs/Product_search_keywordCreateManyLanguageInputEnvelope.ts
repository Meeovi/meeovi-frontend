import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateManyLanguageInput } from "../inputs/Product_search_keywordCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_search_keywordCreateManyLanguageInputEnvelope", {})
export class Product_search_keywordCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_search_keywordCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_search_keywordCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
