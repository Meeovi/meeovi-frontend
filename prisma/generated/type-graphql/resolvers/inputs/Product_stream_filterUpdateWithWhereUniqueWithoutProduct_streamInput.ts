import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterUpdateWithoutProduct_streamInput } from "../inputs/Product_stream_filterUpdateWithoutProduct_streamInput";
import { Product_stream_filterWhereUniqueInput } from "../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_filterUpdateWithWhereUniqueWithoutProduct_streamInput", {})
export class Product_stream_filterUpdateWithWhereUniqueWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_filterWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_filterUpdateWithoutProduct_streamInput, {
    nullable: false
  })
  data!: Product_stream_filterUpdateWithoutProduct_streamInput;
}
