import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateManyProduct_streamInputEnvelope } from "../inputs/Product_stream_filterCreateManyProduct_streamInputEnvelope";
import { Product_stream_filterCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_stream_filterCreateOrConnectWithoutProduct_streamInput";
import { Product_stream_filterCreateWithoutProduct_streamInput } from "../inputs/Product_stream_filterCreateWithoutProduct_streamInput";
import { Product_stream_filterWhereUniqueInput } from "../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_filterCreateNestedManyWithoutProduct_streamInput", {})
export class Product_stream_filterCreateNestedManyWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => [Product_stream_filterCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_stream_filterCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_filterCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_filterCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_filterWhereUniqueInput[] | undefined;
}
