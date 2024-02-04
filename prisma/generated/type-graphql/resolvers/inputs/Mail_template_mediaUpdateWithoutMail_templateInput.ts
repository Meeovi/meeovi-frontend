import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LanguageUpdateOneWithoutMail_template_mediaNestedInput } from "../inputs/LanguageUpdateOneWithoutMail_template_mediaNestedInput";
import { MediaUpdateOneRequiredWithoutMail_template_mediaNestedInput } from "../inputs/MediaUpdateOneRequiredWithoutMail_template_mediaNestedInput";

@TypeGraphQL.InputType("Mail_template_mediaUpdateWithoutMail_templateInput", {})
export class Mail_template_mediaUpdateWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneWithoutMail_template_mediaNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneWithoutMail_template_mediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneRequiredWithoutMail_template_mediaNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneRequiredWithoutMail_template_mediaNestedInput | undefined;
}
