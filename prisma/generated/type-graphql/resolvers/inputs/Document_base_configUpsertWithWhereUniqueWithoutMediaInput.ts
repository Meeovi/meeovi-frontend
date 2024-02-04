import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateWithoutMediaInput } from "../inputs/Document_base_configCreateWithoutMediaInput";
import { Document_base_configUpdateWithoutMediaInput } from "../inputs/Document_base_configUpdateWithoutMediaInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configUpsertWithWhereUniqueWithoutMediaInput", {})
export class Document_base_configUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_configUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Document_base_configUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Document_base_configCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Document_base_configCreateWithoutMediaInput;
}
