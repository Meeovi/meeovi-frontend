import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyDocument_typeInputEnvelope } from "../inputs/DocumentCreateManyDocument_typeInputEnvelope";
import { DocumentCreateOrConnectWithoutDocument_typeInput } from "../inputs/DocumentCreateOrConnectWithoutDocument_typeInput";
import { DocumentCreateWithoutDocument_typeInput } from "../inputs/DocumentCreateWithoutDocument_typeInput";
import { DocumentScalarWhereInput } from "../inputs/DocumentScalarWhereInput";
import { DocumentUpdateManyWithWhereWithoutDocument_typeInput } from "../inputs/DocumentUpdateManyWithWhereWithoutDocument_typeInput";
import { DocumentUpdateWithWhereUniqueWithoutDocument_typeInput } from "../inputs/DocumentUpdateWithWhereUniqueWithoutDocument_typeInput";
import { DocumentUpsertWithWhereUniqueWithoutDocument_typeInput } from "../inputs/DocumentUpsertWithWhereUniqueWithoutDocument_typeInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateManyWithoutDocument_typeNestedInput", {})
export class DocumentUpdateManyWithoutDocument_typeNestedInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpsertWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  upsert?: DocumentUpsertWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyDocument_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  set?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  delete?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpdateWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  update?: DocumentUpdateWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpdateManyWithWhereWithoutDocument_typeInput], {
    nullable: true
  })
  updateMany?: DocumentUpdateManyWithWhereWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DocumentScalarWhereInput[] | undefined;
}
