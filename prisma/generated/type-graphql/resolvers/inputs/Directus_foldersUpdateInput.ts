import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesUpdateManyWithoutDirectus_foldersNestedInput } from "../inputs/Directus_filesUpdateManyWithoutDirectus_foldersNestedInput";
import { Directus_foldersUpdateManyWithoutDirectus_foldersNestedInput } from "../inputs/Directus_foldersUpdateManyWithoutDirectus_foldersNestedInput";
import { Directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput } from "../inputs/Directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Directus_foldersUpdateInput", {})
export class Directus_foldersUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesUpdateManyWithoutDirectus_foldersNestedInput, {
    nullable: true
  })
  directus_files?: Directus_filesUpdateManyWithoutDirectus_foldersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput, {
    nullable: true
  })
  directus_folders?: Directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersUpdateManyWithoutDirectus_foldersNestedInput, {
    nullable: true
  })
  other_directus_folders?: Directus_foldersUpdateManyWithoutDirectus_foldersNestedInput | undefined;
}
