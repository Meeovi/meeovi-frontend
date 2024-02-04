import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateManyMedia_folderInputEnvelope } from "../inputs/MediaCreateManyMedia_folderInputEnvelope";
import { MediaCreateOrConnectWithoutMedia_folderInput } from "../inputs/MediaCreateOrConnectWithoutMedia_folderInput";
import { MediaCreateWithoutMedia_folderInput } from "../inputs/MediaCreateWithoutMedia_folderInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedManyWithoutMedia_folderInput", {})
export class MediaCreateNestedManyWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => [MediaCreateWithoutMedia_folderInput], {
    nullable: true
  })
  create?: MediaCreateWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaCreateOrConnectWithoutMedia_folderInput], {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => MediaCreateManyMedia_folderInputEnvelope, {
    nullable: true
  })
  createMany?: MediaCreateManyMedia_folderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  connect?: MediaWhereUniqueInput[] | undefined;
}
