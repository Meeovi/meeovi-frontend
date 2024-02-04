import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyDocumentInputEnvelope } from "../inputs/DocumentCreateManyDocumentInputEnvelope";
import { DocumentCreateOrConnectWithoutDocumentInput } from "../inputs/DocumentCreateOrConnectWithoutDocumentInput";
import { DocumentCreateWithoutDocumentInput } from "../inputs/DocumentCreateWithoutDocumentInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateNestedManyWithoutDocumentInput", {})
export class DocumentCreateNestedManyWithoutDocumentInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutDocumentInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutDocumentInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyDocumentInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyDocumentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput[] | undefined;
}
