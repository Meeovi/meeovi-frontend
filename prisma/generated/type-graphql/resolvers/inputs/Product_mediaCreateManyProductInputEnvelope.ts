import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateManyProductInput } from "../inputs/Product_mediaCreateManyProductInput";

@TypeGraphQL.InputType("Product_mediaCreateManyProductInputEnvelope", {})
export class Product_mediaCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_mediaCreateManyProductInput], {
    nullable: false
  })
  data!: Product_mediaCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
