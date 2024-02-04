import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateManyProductInput } from "../inputs/Product_translationCreateManyProductInput";

@TypeGraphQL.InputType("Product_translationCreateManyProductInputEnvelope", {})
export class Product_translationCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_translationCreateManyProductInput], {
    nullable: false
  })
  data!: Product_translationCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
