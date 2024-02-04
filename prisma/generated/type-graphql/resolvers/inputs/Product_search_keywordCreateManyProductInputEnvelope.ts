import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateManyProductInput } from "../inputs/Product_search_keywordCreateManyProductInput";

@TypeGraphQL.InputType("Product_search_keywordCreateManyProductInputEnvelope", {})
export class Product_search_keywordCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_search_keywordCreateManyProductInput], {
    nullable: false
  })
  data!: Product_search_keywordCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
