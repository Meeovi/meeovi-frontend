import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutDocument_base_configInput } from "../inputs/MediaCreateOrConnectWithoutDocument_base_configInput";
import { MediaCreateWithoutDocument_base_configInput } from "../inputs/MediaCreateWithoutDocument_base_configInput";
import { MediaUpdateToOneWithWhereWithoutDocument_base_configInput } from "../inputs/MediaUpdateToOneWithWhereWithoutDocument_base_configInput";
import { MediaUpsertWithoutDocument_base_configInput } from "../inputs/MediaUpsertWithoutDocument_base_configInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutDocument_base_configNestedInput", {})
export class MediaUpdateOneWithoutDocument_base_configNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutDocument_base_configInput, {
    nullable: true
  })
  create?: MediaCreateWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutDocument_base_configInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutDocument_base_configInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutDocument_base_configInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutDocument_base_configInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutDocument_base_configInput | undefined;
}
