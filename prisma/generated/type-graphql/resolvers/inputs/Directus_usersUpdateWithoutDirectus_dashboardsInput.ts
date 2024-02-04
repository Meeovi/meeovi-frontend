import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput } from "../inputs/Directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput";
import { Directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput } from "../inputs/Directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput";
import { Directus_flowsUpdateManyWithoutDirectus_usersNestedInput } from "../inputs/Directus_flowsUpdateManyWithoutDirectus_usersNestedInput";
import { Directus_rolesUpdateOneWithoutDirectus_usersNestedInput } from "../inputs/Directus_rolesUpdateOneWithoutDirectus_usersNestedInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Directus_usersUpdateWithoutDirectus_dashboardsInput", {})
export class Directus_usersUpdateWithoutDirectus_dashboardsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  location?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tags?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  language?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  theme?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tfa_secret?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  token?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_access?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_page?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  provider?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  external_identifier?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  auth_data?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  email_notifications?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput, {
    nullable: true
  })
  directus_files_directus_files_modified_byTodirectus_users?: Directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput, {
    nullable: true
  })
  directus_files_directus_files_uploaded_byTodirectus_users?: Directus_filesUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsUpdateManyWithoutDirectus_usersNestedInput, {
    nullable: true
  })
  directus_flows?: Directus_flowsUpdateManyWithoutDirectus_usersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesUpdateOneWithoutDirectus_usersNestedInput, {
    nullable: true
  })
  directus_roles?: Directus_rolesUpdateOneWithoutDirectus_usersNestedInput | undefined;
}
