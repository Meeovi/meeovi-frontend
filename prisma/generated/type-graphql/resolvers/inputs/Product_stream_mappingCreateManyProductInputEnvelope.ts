import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCreateManyProductInput } from "../inputs/Product_stream_mappingCreateManyProductInput";

@TypeGraphQL.InputType("Product_stream_mappingCreateManyProductInputEnvelope", {})
export class Product_stream_mappingCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateManyProductInput], {
    nullable: false
  })
  data!: Product_stream_mappingCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
