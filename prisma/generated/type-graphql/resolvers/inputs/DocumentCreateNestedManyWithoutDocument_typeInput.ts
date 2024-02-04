import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyDocument_typeInputEnvelope } from "../inputs/DocumentCreateManyDocument_typeInputEnvelope";
import { DocumentCreateOrConnectWithoutDocument_typeInput } from "../inputs/DocumentCreateOrConnectWithoutDocument_typeInput";
import { DocumentCreateWithoutDocument_typeInput } from "../inputs/DocumentCreateWithoutDocument_typeInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateNestedManyWithoutDocument_typeInput", {})
export class DocumentCreateNestedManyWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyDocument_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput[] | undefined;
}
