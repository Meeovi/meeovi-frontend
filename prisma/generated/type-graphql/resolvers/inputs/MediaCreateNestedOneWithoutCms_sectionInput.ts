import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCms_sectionInput } from "../inputs/MediaCreateOrConnectWithoutCms_sectionInput";
import { MediaCreateWithoutCms_sectionInput } from "../inputs/MediaCreateWithoutCms_sectionInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutCms_sectionInput", {})
export class MediaCreateNestedOneWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_sectionInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCms_sectionInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
