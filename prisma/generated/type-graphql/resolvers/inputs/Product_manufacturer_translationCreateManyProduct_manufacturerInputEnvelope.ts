import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateManyProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationCreateManyProduct_manufacturerInput";

@TypeGraphQL.InputType("Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope", {})
export class Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateManyProduct_manufacturerInput], {
    nullable: false
  })
  data!: Product_manufacturer_translationCreateManyProduct_manufacturerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
