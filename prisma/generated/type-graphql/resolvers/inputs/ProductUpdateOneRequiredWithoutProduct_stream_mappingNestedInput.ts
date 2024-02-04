import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateOrConnectWithoutProduct_stream_mappingInput";
import { ProductCreateWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateWithoutProduct_stream_mappingInput";
import { ProductUpdateToOneWithWhereWithoutProduct_stream_mappingInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_stream_mappingInput";
import { ProductUpsertWithoutProduct_stream_mappingInput } from "../inputs/ProductUpsertWithoutProduct_stream_mappingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_stream_mappingNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_stream_mappingNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_stream_mappingInput | undefined;
}
