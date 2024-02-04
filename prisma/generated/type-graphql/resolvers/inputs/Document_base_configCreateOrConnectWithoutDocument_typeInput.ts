import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateWithoutDocument_typeInput } from "../inputs/Document_base_configCreateWithoutDocument_typeInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configCreateOrConnectWithoutDocument_typeInput", {})
export class Document_base_configCreateOrConnectWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_configCreateWithoutDocument_typeInput, {
    nullable: false
  })
  create!: Document_base_configCreateWithoutDocument_typeInput;
}
