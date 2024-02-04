import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyDocumentInputEnvelope } from "../inputs/DocumentCreateManyDocumentInputEnvelope";
import { DocumentCreateOrConnectWithoutDocumentInput } from "../inputs/DocumentCreateOrConnectWithoutDocumentInput";
import { DocumentCreateWithoutDocumentInput } from "../inputs/DocumentCreateWithoutDocumentInput";
import { DocumentScalarWhereInput } from "../inputs/DocumentScalarWhereInput";
import { DocumentUpdateManyWithWhereWithoutDocumentInput } from "../inputs/DocumentUpdateManyWithWhereWithoutDocumentInput";
import { DocumentUpdateWithWhereUniqueWithoutDocumentInput } from "../inputs/DocumentUpdateWithWhereUniqueWithoutDocumentInput";
import { DocumentUpsertWithWhereUniqueWithoutDocumentInput } from "../inputs/DocumentUpsertWithWhereUniqueWithoutDocumentInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateManyWithoutDocumentNestedInput", {})
export class DocumentUpdateManyWithoutDocumentNestedInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutDocumentInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutDocumentInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpsertWithWhereUniqueWithoutDocumentInput], {
    nullable: true
  })
  upsert?: DocumentUpsertWithWhereUniqueWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyDocumentInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyDocumentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [DocumentUpdateWithWhereUniqueWithoutDocumentInput], {
    nullable: true
  })
  update?: DocumentUpdateWithWhereUniqueWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpdateManyWithWhereWithoutDocumentInput], {
    nullable: true
  })
  updateMany?: DocumentUpdateManyWithWhereWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DocumentScalarWhereInput[] | undefined;
}
