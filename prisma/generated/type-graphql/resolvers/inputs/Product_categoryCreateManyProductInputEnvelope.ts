import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateManyProductInput } from "../inputs/Product_categoryCreateManyProductInput";

@TypeGraphQL.InputType("Product_categoryCreateManyProductInputEnvelope", {})
export class Product_categoryCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_categoryCreateManyProductInput], {
    nullable: false
  })
  data!: Product_categoryCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
