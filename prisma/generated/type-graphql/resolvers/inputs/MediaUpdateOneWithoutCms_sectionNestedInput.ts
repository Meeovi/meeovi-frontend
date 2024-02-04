import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCms_sectionInput } from "../inputs/MediaCreateOrConnectWithoutCms_sectionInput";
import { MediaCreateWithoutCms_sectionInput } from "../inputs/MediaCreateWithoutCms_sectionInput";
import { MediaUpdateToOneWithWhereWithoutCms_sectionInput } from "../inputs/MediaUpdateToOneWithWhereWithoutCms_sectionInput";
import { MediaUpsertWithoutCms_sectionInput } from "../inputs/MediaUpsertWithoutCms_sectionInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutCms_sectionNestedInput", {})
export class MediaUpdateOneWithoutCms_sectionNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_sectionInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCms_sectionInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutCms_sectionInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutCms_sectionInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutCms_sectionInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutCms_sectionInput | undefined;
}
