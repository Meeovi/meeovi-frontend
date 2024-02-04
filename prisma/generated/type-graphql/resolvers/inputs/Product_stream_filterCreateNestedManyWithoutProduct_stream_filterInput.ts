import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateManyProduct_stream_filterInputEnvelope } from "../inputs/Product_stream_filterCreateManyProduct_stream_filterInputEnvelope";
import { Product_stream_filterCreateOrConnectWithoutProduct_stream_filterInput } from "../inputs/Product_stream_filterCreateOrConnectWithoutProduct_stream_filterInput";
import { Product_stream_filterCreateWithoutProduct_stream_filterInput } from "../inputs/Product_stream_filterCreateWithoutProduct_stream_filterInput";
import { Product_stream_filterWhereUniqueInput } from "../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_filterCreateNestedManyWithoutProduct_stream_filterInput", {})
export class Product_stream_filterCreateNestedManyWithoutProduct_stream_filterInput {
  @TypeGraphQL.Field(_type => [Product_stream_filterCreateWithoutProduct_stream_filterInput], {
    nullable: true
  })
  create?: Product_stream_filterCreateWithoutProduct_stream_filterInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterCreateOrConnectWithoutProduct_stream_filterInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_filterCreateOrConnectWithoutProduct_stream_filterInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateManyProduct_stream_filterInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_filterCreateManyProduct_stream_filterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_filterWhereUniqueInput[] | undefined;
}
