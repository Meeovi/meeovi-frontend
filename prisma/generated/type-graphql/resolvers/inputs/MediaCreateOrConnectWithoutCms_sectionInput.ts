import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutCms_sectionInput } from "../inputs/MediaCreateWithoutCms_sectionInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutCms_sectionInput", {})
export class MediaCreateOrConnectWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_sectionInput, {
    nullable: false
  })
  create!: MediaCreateWithoutCms_sectionInput;
}
