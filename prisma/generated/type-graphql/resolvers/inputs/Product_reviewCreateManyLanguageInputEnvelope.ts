import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyLanguageInput } from "../inputs/Product_reviewCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_reviewCreateManyLanguageInputEnvelope", {})
export class Product_reviewCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_reviewCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_reviewCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
