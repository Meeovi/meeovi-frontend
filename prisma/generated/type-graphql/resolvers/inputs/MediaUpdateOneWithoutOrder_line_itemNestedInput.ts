import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/MediaCreateOrConnectWithoutOrder_line_itemInput";
import { MediaCreateWithoutOrder_line_itemInput } from "../inputs/MediaCreateWithoutOrder_line_itemInput";
import { MediaUpdateToOneWithWhereWithoutOrder_line_itemInput } from "../inputs/MediaUpdateToOneWithWhereWithoutOrder_line_itemInput";
import { MediaUpsertWithoutOrder_line_itemInput } from "../inputs/MediaUpsertWithoutOrder_line_itemInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutOrder_line_itemNestedInput", {})
export class MediaUpdateOneWithoutOrder_line_itemNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_itemInput, {
    nullable: true
  })
  create?: MediaCreateWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutOrder_line_itemInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutOrder_line_itemInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  disconnect?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  delete?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutOrder_line_itemInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutOrder_line_itemInput | undefined;
}
