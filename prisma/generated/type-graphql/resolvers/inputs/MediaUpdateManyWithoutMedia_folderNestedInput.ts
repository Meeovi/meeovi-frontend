import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateManyMedia_folderInputEnvelope } from "../inputs/MediaCreateManyMedia_folderInputEnvelope";
import { MediaCreateOrConnectWithoutMedia_folderInput } from "../inputs/MediaCreateOrConnectWithoutMedia_folderInput";
import { MediaCreateWithoutMedia_folderInput } from "../inputs/MediaCreateWithoutMedia_folderInput";
import { MediaScalarWhereInput } from "../inputs/MediaScalarWhereInput";
import { MediaUpdateManyWithWhereWithoutMedia_folderInput } from "../inputs/MediaUpdateManyWithWhereWithoutMedia_folderInput";
import { MediaUpdateWithWhereUniqueWithoutMedia_folderInput } from "../inputs/MediaUpdateWithWhereUniqueWithoutMedia_folderInput";
import { MediaUpsertWithWhereUniqueWithoutMedia_folderInput } from "../inputs/MediaUpsertWithWhereUniqueWithoutMedia_folderInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateManyWithoutMedia_folderNestedInput", {})
export class MediaUpdateManyWithoutMedia_folderNestedInput {
  @TypeGraphQL.Field(_type => [MediaCreateWithoutMedia_folderInput], {
    nullable: true
  })
  create?: MediaCreateWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaCreateOrConnectWithoutMedia_folderInput], {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaUpsertWithWhereUniqueWithoutMedia_folderInput], {
    nullable: true
  })
  upsert?: MediaUpsertWithWhereUniqueWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => MediaCreateManyMedia_folderInputEnvelope, {
    nullable: true
  })
  createMany?: MediaCreateManyMedia_folderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  set?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  delete?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  connect?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaUpdateWithWhereUniqueWithoutMedia_folderInput], {
    nullable: true
  })
  update?: MediaUpdateWithWhereUniqueWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaUpdateManyWithWhereWithoutMedia_folderInput], {
    nullable: true
  })
  updateMany?: MediaUpdateManyWithWhereWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediaScalarWhereInput[] | undefined;
}
