import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateManyProductInput } from "../inputs/Product_tagCreateManyProductInput";

@TypeGraphQL.InputType("Product_tagCreateManyProductInputEnvelope", {})
export class Product_tagCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_tagCreateManyProductInput], {
    nullable: false
  })
  data!: Product_tagCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
