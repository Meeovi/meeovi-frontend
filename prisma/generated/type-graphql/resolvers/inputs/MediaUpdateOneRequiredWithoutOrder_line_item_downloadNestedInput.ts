import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutOrder_line_item_downloadInput } from "../inputs/MediaCreateOrConnectWithoutOrder_line_item_downloadInput";
import { MediaCreateWithoutOrder_line_item_downloadInput } from "../inputs/MediaCreateWithoutOrder_line_item_downloadInput";
import { MediaUpdateToOneWithWhereWithoutOrder_line_item_downloadInput } from "../inputs/MediaUpdateToOneWithWhereWithoutOrder_line_item_downloadInput";
import { MediaUpsertWithoutOrder_line_item_downloadInput } from "../inputs/MediaUpsertWithoutOrder_line_item_downloadInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneRequiredWithoutOrder_line_item_downloadNestedInput", {})
export class MediaUpdateOneRequiredWithoutOrder_line_item_downloadNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  create?: MediaCreateWithoutOrder_line_item_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutOrder_line_item_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutOrder_line_item_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutOrder_line_item_downloadInput | undefined;
}
