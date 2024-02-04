import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutProduct_stream_mappingInput } from "../inputs/Product_streamCreateOrConnectWithoutProduct_stream_mappingInput";
import { Product_streamCreateWithoutProduct_stream_mappingInput } from "../inputs/Product_streamCreateWithoutProduct_stream_mappingInput";
import { Product_streamUpdateToOneWithWhereWithoutProduct_stream_mappingInput } from "../inputs/Product_streamUpdateToOneWithWhereWithoutProduct_stream_mappingInput";
import { Product_streamUpsertWithoutProduct_stream_mappingInput } from "../inputs/Product_streamUpsertWithoutProduct_stream_mappingInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamUpdateOneRequiredWithoutProduct_stream_mappingNestedInput", {})
export class Product_streamUpdateOneRequiredWithoutProduct_stream_mappingNestedInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpsertWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  upsert?: Product_streamUpsertWithoutProduct_stream_mappingInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateToOneWithWhereWithoutProduct_stream_mappingInput, {
    nullable: true
  })
  update?: Product_streamUpdateToOneWithWhereWithoutProduct_stream_mappingInput | undefined;
}
