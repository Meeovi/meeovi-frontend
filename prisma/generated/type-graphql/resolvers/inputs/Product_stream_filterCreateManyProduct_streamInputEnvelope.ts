import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateManyProduct_streamInput } from "../inputs/Product_stream_filterCreateManyProduct_streamInput";

@TypeGraphQL.InputType("Product_stream_filterCreateManyProduct_streamInputEnvelope", {})
export class Product_stream_filterCreateManyProduct_streamInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_stream_filterCreateManyProduct_streamInput], {
    nullable: false
  })
  data!: Product_stream_filterCreateManyProduct_streamInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
