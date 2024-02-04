import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateManyProduct_stream_filterInput } from "../inputs/Product_stream_filterCreateManyProduct_stream_filterInput";

@TypeGraphQL.InputType("Product_stream_filterCreateManyProduct_stream_filterInputEnvelope", {})
export class Product_stream_filterCreateManyProduct_stream_filterInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_stream_filterCreateManyProduct_stream_filterInput], {
    nullable: false
  })
  data!: Product_stream_filterCreateManyProduct_stream_filterInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
