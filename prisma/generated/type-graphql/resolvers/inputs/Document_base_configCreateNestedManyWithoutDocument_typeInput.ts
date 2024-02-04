import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateManyDocument_typeInputEnvelope } from "../inputs/Document_base_configCreateManyDocument_typeInputEnvelope";
import { Document_base_configCreateOrConnectWithoutDocument_typeInput } from "../inputs/Document_base_configCreateOrConnectWithoutDocument_typeInput";
import { Document_base_configCreateWithoutDocument_typeInput } from "../inputs/Document_base_configCreateWithoutDocument_typeInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configCreateNestedManyWithoutDocument_typeInput", {})
export class Document_base_configCreateNestedManyWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => [Document_base_configCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: Document_base_configCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_configCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_configCreateManyDocument_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_base_configWhereUniqueInput[] | undefined;
}
