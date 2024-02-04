import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateManyMedia_folderInputEnvelope } from "../inputs/Media_folderCreateManyMedia_folderInputEnvelope";
import { Media_folderCreateOrConnectWithoutMedia_folderInput } from "../inputs/Media_folderCreateOrConnectWithoutMedia_folderInput";
import { Media_folderCreateWithoutMedia_folderInput } from "../inputs/Media_folderCreateWithoutMedia_folderInput";
import { Media_folderScalarWhereInput } from "../inputs/Media_folderScalarWhereInput";
import { Media_folderUpdateManyWithWhereWithoutMedia_folderInput } from "../inputs/Media_folderUpdateManyWithWhereWithoutMedia_folderInput";
import { Media_folderUpdateWithWhereUniqueWithoutMedia_folderInput } from "../inputs/Media_folderUpdateWithWhereUniqueWithoutMedia_folderInput";
import { Media_folderUpsertWithWhereUniqueWithoutMedia_folderInput } from "../inputs/Media_folderUpsertWithWhereUniqueWithoutMedia_folderInput";
import { Media_folderWhereUniqueInput } from "../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.InputType("Media_folderUpdateManyWithoutMedia_folderNestedInput", {})
export class Media_folderUpdateManyWithoutMedia_folderNestedInput {
  @TypeGraphQL.Field(_type => [Media_folderCreateWithoutMedia_folderInput], {
    nullable: true
  })
  create?: Media_folderCreateWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderCreateOrConnectWithoutMedia_folderInput], {
    nullable: true
  })
  connectOrCreate?: Media_folderCreateOrConnectWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderUpsertWithWhereUniqueWithoutMedia_folderInput], {
    nullable: true
  })
  upsert?: Media_folderUpsertWithWhereUniqueWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateManyMedia_folderInputEnvelope, {
    nullable: true
  })
  createMany?: Media_folderCreateManyMedia_folderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_folderWhereUniqueInput], {
    nullable: true
  })
  set?: Media_folderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Media_folderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderWhereUniqueInput], {
    nullable: true
  })
  delete?: Media_folderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_folderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderUpdateWithWhereUniqueWithoutMedia_folderInput], {
    nullable: true
  })
  update?: Media_folderUpdateWithWhereUniqueWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderUpdateManyWithWhereWithoutMedia_folderInput], {
    nullable: true
  })
  updateMany?: Media_folderUpdateManyWithWhereWithoutMedia_folderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Media_folderScalarWhereInput[] | undefined;
}
