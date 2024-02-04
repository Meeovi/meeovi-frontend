import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateOrConnectWithoutProduct_stream_mappingInput";
import { ProductCreateWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateWithoutProduct_stream_mappingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_stream_mappingInput", {})
export class ProductCreateNestedOneWithoutProduct_stream_mappingInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
